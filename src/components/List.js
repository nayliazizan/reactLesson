function List({list}) {
    return(
        <ul>
            {/* 10. Map through the list and render each item's title */}
            {list.map((item) => {
                return <h3 key={item.id}>🥯{item.title}</h3>;
            })}
        </ul>
    );
}

export default List;