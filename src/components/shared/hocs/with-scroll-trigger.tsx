import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { SectionContainer } from '..';

export const withScrollTrigger = <T extends {}>(WrappedComponent: React.FC<T>): React.FC<T> => {
    return (props: any) => {
        const [visible, setVisible] = useState(false);
        const onEnterViewPort = () => {
            setVisible(true);
        };
        return (
            <ScrollTrigger onEnter={onEnterViewPort}>
                <SectionContainer pose={(visible) ? 'visible' : 'hidden'}>
                    <WrappedComponent {...props}/>
                </SectionContainer>
            </ScrollTrigger>
        );
    };
};
