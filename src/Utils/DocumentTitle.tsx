interface DocumentTitleProps {
    title: string;
    noForceScroll?: boolean;
}

export const DocumentTitle = (props: DocumentTitleProps) => {
    if (window.document.title !== "CAR | " + props.title){
        window.document.title = "CAR | " + props.title
        if (!props.noForceScroll) window.scrollTo(0, 0);
    }
}