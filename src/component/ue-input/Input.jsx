import './inpux.css'

const formatDate = (isoStr) => {
    if (!isoStr) return '';
    const [y, m, d] = isoStr.split('-');
    return `${d}.${m}.${y}`;
};

export default function Input({
    label,
    requered = false,
    onChange = () => { },
    onKeyDown = () => { },
    value = '',
    fullWidth = false,
    style = {},
    ...props
}) {

    return (
        <div
            className="ueinput"
            style={{ ...style, width: fullWidth ? '100%' : 'unset' }}
        >
            <input
                placeholder={`${label}${requered ? '*' : ''}`}
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
                {...props}
            />
        </div>
    )
}

