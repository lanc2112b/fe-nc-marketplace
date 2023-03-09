import { useParams } from "react-router-dom";

const ViewItem = () => {
const { item_id } = useParams();
    return (
        <section> {item_id}</section>
    )
}

export default ViewItem;