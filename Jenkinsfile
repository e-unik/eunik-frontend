pipeline {
    agent any
    environment {
        GIT_CREDENTIALS_KEY = 'eunik-git-key'
        SSH_CREDENTIALS_KEY = 'remote-server-ssh-key'
        SSH_SERVER_USER = credentials('eunik-server-user')
        SSH_SERVER_PORT = credentials('eunik-server-port')

        WORK_DIRECTORY = '/eunik/frontend'
        BACKUP_DIRECTORY = '/eunik/backups/frontend'
    }
    
    stages {
        stage('Clone git repository') {
            steps {
                echo "Clonning git repository with eunik frontend project in ${params.GIT_BRANCH} branch."
                git branch: "${params.GIT_BRANCH}",
                    url: "${env.GIT_URL}",
                    credentialsId: "${env.GIT_CREDENTIALS_KEY}"
            }
        }
        stage('Create backup of directory') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${env.SSH_SERVER_PORT} ${SSH_SERVER_USER}@eunik.ru <<'EOF'
                        SRC="${env.WORK_DIRECTORY}"
                        DST="${env.BACKUP_DIRECTORY}"

                        set -euo pipefail
                        if [ -d "\$SRC" ] && [ -n "\$(ls -a "\$SRC" 2>/dev/null)" ]; then
                            mkdir -p "\$DST"
                            rm -rf -- "\$DST"/*
                            cp -a "\$SRC"/. "\$DST"/
                            echo "Бэкап \$SRC выполнен в \$DST."
                        else
                            echo "Нет файлов в \$SRC" для бэкапа — пропуск."
                        fi
                        EOF
                    """
                }
            }
        }
        stage('Clear remote directory') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${SSH_SERVER_PORT} ${SSH_SERVER_USER}@eunik.ru \\
                        rm -rf ${env.WORK_DIRECTORY}/*
                    """
                }
            }
        }
        stage('Clone bot to server') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        scp -P ${SSH_SERVER_PORT} -o StrictHostKeyChecking=no -r ./* ${SSH_SERVER_USER}@eunik.ru:${env.WORK_DIRECTORY}/
                    """
                }
            }
        }
        stage('Build project') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        npm ci && npm run build
                    """
                }
            }
        }
    }
}