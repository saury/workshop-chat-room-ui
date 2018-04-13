import { BubbleLeft } from './BubbleLeft';
import { BubbleRight } from './BubbleRight';

export interface Props {
    content: string;
    from?: 'left' | 'right';
    tail?: boolean;
    separation?: 'big' | 'small';
    type?: 'primary' | 'secondary';
}

export const Bubble = (props: Props) =>
    props.from === 'left' ? <BubbleLeft {...props} /> : <BubbleRight {...props} />;
