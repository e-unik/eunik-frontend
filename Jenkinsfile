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
                cleanWs()
                git branch: "${params.GIT_BRANCH}",
                    url: "${env.GIT_URL}",
                    credentialsId: "${env.GIT_CREDENTIALS_KEY}"
            }
        }

        stage('Install project modules') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Create backup of remote work directory') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${env.SSH_SERVER_PORT} ${env.SSH_SERVER_USER}@ssh.eunik.ru \\
                        SRC='${env.WORK_DIRECTORY}' \\
                        DST='${env.BACKUP_DIRECTORY}' \\
                        '
                            set -euo pipefail
                            if [ -d "\$SRC" ] && [ -n "\$(ls -a "\$SRC" 2>/dev/null)" ]; then
                                mkdir -p "\$DST"
                                rm -rf -- "\$DST"/*
                                cp -a "\$SRC"/. "\$DST"/
                            fi
                        '
                    """
                    
                }
            }
        }
        stage('Clear remote work directory') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -p ${env.SSH_SERVER_PORT} ${env.SSH_SERVER_USER}@eunik.ru \\
                        rm -rf ${env.WORK_DIRECTORY}/*
                    """
                }
            }
        }
        stage('Clone project to the server') {
            steps {
                sshagent (credentials: [env.SSH_CREDENTIALS_KEY]) {
                    sh """
                        scp -P ${env.SSH_SERVER_PORT} -o StrictHostKeyChecking=no -r ./dist/* ${env.SSH_SERVER_USER}@eunik.ru:${env.WORK_DIRECTORY}/
                    """
                }
            }
        }
    }
}
