import { ListGroup,Button} from "react-bootstrap";

const ItemTareas = () => {
    return (
        <div>
        <ListGroup.Item className="d-flex justify-content-between">
            Tarea de prueba
            <Button variant='danger'>Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTareas;