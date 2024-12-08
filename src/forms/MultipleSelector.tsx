import "./MultipleSelector.css"
export default function MultipleSelectorField(
  props: multipleSelectorFieldProps
) {
  function select(item: multipleSelectormodel) {
    const selected = [...props.selected, item];
    const unselected = props.unselected.filter((value) => value != item);
    props.onChange(selected, unselected);
  }
  function selectAll() {
   
    const selected = [...props.selected, ...props.unselected];
    const unselected: multipleSelectormodel[] = [];
    props.onChange(selected, unselected);
  }
  function deselect(item: multipleSelectormodel) {
    const unselected = [...props.unselected, item];
    const selected = props.selected.filter((value) => value != item);
    props.onChange(selected, unselected);
  }
  function deselectAll() {
    const unselected = [...props.selected, ...props.unselected];
    const selected: multipleSelectormodel[] = [];
    props.onChange(selected, unselected);
  }
  return (
    <div className="mb-3">
      <label>{props.displayname}</label>
      <div className="multiple-selector">
        <ul>
          {props.unselected.map((item) => (
            <li key={item.key} onClick={() => select(item)}>
              {item.value}
            </li>
          ))}
        </ul>
        <div className="multiple-selector-button">
            <button type="button" onClick={selectAll}>{">>"}</button>
            <button type="button" onClick={deselectAll}>{"<<"}</button>
        </div>
        <ul>
        {props.selected.map((item) => (
            <li key={item.key} onClick={() => deselect(item)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface multipleSelectorFieldProps {
  displayname: string;
  selected: multipleSelectormodel[];
  unselected: multipleSelectormodel[];
  onChange(
    selected: multipleSelectormodel[],
    unselected: multipleSelectormodel[]
  ): void;
}

export interface multipleSelectormodel {
  key: number;
  value: string;
}
