import { ListGroup,Button} from "react-bootstrap";

const ItemTareas = ({nombreTarea}) => {

    return (
        <div>
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreTarea}
            <Button variant='danger'>Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTareas;