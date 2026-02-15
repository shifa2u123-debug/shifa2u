type BlueLineProps = {
    className?: string;
}

export default function BlueLine({ className = "" }: BlueLineProps) {
    return (
        <div
            style={{
                height: "1px",
                background: "var(--primary-200)",
                margin: "0 1rem",
            }}
            className={className}
        />
    );
}
