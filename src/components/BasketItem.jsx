function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        plusItem = Function.prototype,
        minusItem = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
                {name} <i
                    className="material-icons basket-quantity"
                    onClick={() => minusItem(id)}
                    >
                    remove
                    </i>
                    x{quantity}
                    <i
                        className="material-icons basket-quantity"
                        onClick={() => plusItem(id)}
                    >
                        add
                    </i>
                    = {price * quantity} руб.
                <span 
                    className="secondary-content"
                    onClick={() => removeFromBasket(id)}
                >
                    <i class="material-icons basket-delete">not_interested</i>
                </span>
        </li>
    );
}

export {BasketItem}