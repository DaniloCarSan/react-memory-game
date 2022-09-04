import * as C from './styles';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    backgroundColor?: string;
}

const Button = ({ label, icon, onClick, backgroundColor }: Props) => {
    return (
        <C.Container onClick={onClick} backgroundColor={backgroundColor} >
            {icon &&
                <C.IconArea>
                    <C.Icon src={icon} />
                </C.IconArea>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}

export default Button;