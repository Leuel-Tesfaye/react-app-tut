import Message from "../message";

function ListGroup() {
  let items = ["New York", "Ethiopia", "Kenya", "England", "Canada"];
  let selectedIndex = 0;
  const message = items.length === 0 && <p>No item found</p>;
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index // this logic will do the selected index will be active and change color or not.
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item} // each list item should have a key prop or key that uniquely identifies that item
            onClick={() => console.log(item)} // handle events item clicked and outputs items when they're clicked
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
