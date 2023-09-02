type Props = {
    children: React.ReactNode;
    className?: string;
};

export const TransparentContainer = (props: Props) => {
    return (
        <div
            className={`bg-violet-200/20 rounded-md p-4 backdrop-blur-md drop-shadow-lg ${props.className}`}
        >
            {props.children}
        </div>
    );
};
