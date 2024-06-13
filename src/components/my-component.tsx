interface MyComponentProps {
    className?: string
}

export const MyComponent: React.FC<MyComponentProps> = ({ className }) => {

    return (
        <div className={className}>
            Hello, World!
        </div>
    );
}

