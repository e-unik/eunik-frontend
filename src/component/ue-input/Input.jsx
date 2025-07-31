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
            style={{ ...style, flex: fullWidth ? '1 1 auto' : '0 0' }}
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

