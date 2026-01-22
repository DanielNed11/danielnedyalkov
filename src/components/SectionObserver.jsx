import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionObserver = ({ id, onSectionChange, children }) => {
    const { ref, inView } = useInView({
        threshold: 0, // Trigger as soon as it enters the rootMargin area
        rootMargin: '-45% 0px -45% 0px', // Active zone is the middle 10% of the viewport
    });

    React.useEffect(() => {
        if (inView) {
            onSectionChange(id);
        }
    }, [inView, id, onSectionChange]);

    return (
        <div id={id} ref={ref}>
            {children}
        </div>
    );
};

export default SectionObserver;