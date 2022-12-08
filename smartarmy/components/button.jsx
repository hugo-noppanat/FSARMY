import Button from 'react-bootstrap/Button';
export default function Buttons(props){
    const {
        label,
        variant="primary",
        size="sm",
        typeButton,
        className,
    } = props 

    return(
        <Button 
            variant={variant} 
            size={size} 
            type={typeButton}
            // onClick={handleSubmit(functionClick)}
            className={className}
            >
            {label}
        </Button>
    )
}