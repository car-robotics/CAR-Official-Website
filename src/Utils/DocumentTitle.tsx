interface DocumentTitleProps {
    title: string;
}

export const DocumentTitle = (props: DocumentTitleProps) => {
    window.document.title = "CAR | " + props.title
}