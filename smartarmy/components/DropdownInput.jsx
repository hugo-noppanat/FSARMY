import { Dropdown,Text } from "@nextui-org/react";
import { useState, useMemo} from "react";

export default function DropdownInput(prop) {
  const {
    menuItems,
    nameLabel,
    selectedNname: selected,
    setSelectedNname: setSelected,
    disable = false,
    size = "md",
  } = prop;

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <div>
      <Text size={14} css={{marginBottom:"0.3rem", marginLeft:"0.5rem"}} color="primary">{nameLabel}</Text>
      <Dropdown>
      <Dropdown.Button flat disabled={disable} size={size}>
        { selectedValue ? menuItems.find((item)=> selectedValue === item.key)?.value : "โปรดเลือก...  "}
      </Dropdown.Button>
      <Dropdown.Menu 
        label={nameLabel}
        aria-label="dropdown action" 
        items={menuItems} 
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        isDisable={true}
      >
        {(item) => (
          <Dropdown.Item
            key={item.key}
            // color={"default"}
          >
            {item.value}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}
