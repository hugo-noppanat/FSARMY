import { Dropdown, Text, Row, Col } from "@nextui-org/react";
import { useState, useMemo, Fragment } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function DropdownInput(prop) {
  const {
    formName,
    menuItems,
    nameLabel,
    rules = null,
    reactHookForm,
    isReadOnly = false,
    defaultValue = null,
    // props for custom width and height select tag
  } = prop;

  const [selected, setSelected] = useState(defaultValue);

  
  return (
    <Fragment>
      {rules !== null ? (
        <Controller
          name={formName}
          control={reactHookForm.control}
          register={reactHookForm.register}
          setValue={reactHookForm.setValue}
          render={({ field: { onChange, value } }) => (
            <>
              <Row>
                <Text
                  size={14}
                  css={{ marginBottom: "0.3rem", marginLeft: "0.5rem" }}
                  color="primary"
                >
                  {nameLabel}
                </Text>
              </Row>
              <Row>
                <Select
                  options={menuItems}
                  value={menuItems.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  defaultValue={menuItems.find((c) => c.value === selected)}
                />
              </Row>
            </>
          )}
          rules={rules}
        />
      ) : (
        <Controller
          name={formName}
          control={reactHookForm.control}
          register={reactHookForm.register}
          setValue={reactHookForm.setValue}
          render={({ field: { onChange, value } }) => (
            <>
              <div className="form-group col-md-16">
                <label
                  htmlFor={formName}
                  className="form-label"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--primary)",
                    marginBottom: "0.25rem",
                    marginLeft: "0.35rem",
                  }}
                >
                  {nameLabel}
                </label>
                <Select
                  options={menuItems}
                  value={menuItems.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                  defaultValue={menuItems.find((c) => c.value === selected)}
                />
              </div>
            </>
          )}
        />
      )}
    </Fragment>
  );
}
