import { ListGroup,Button} from "react-bootstrap";

const ItemTareas = ({nombreTarea, borrarTarea}) => {

    return (
        <div>
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreTarea}
            <Button variant='danger' onClick={()=> borrarTarea(nombreTarea)}>Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTareas;