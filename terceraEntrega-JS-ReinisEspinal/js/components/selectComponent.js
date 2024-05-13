function selectComponent(selectElementId, options) {
  const selectTag = document.getElementById(selectElementId);

  // Clear existing options
  selectTag.innerHTML = "";

  // Add a default option
  const defaultOption = document.createElement("option");
  defaultOption.id ="defaultSelectOptionId"
  defaultOption.value = "all";
  defaultOption.text = "All";

  defaultOption.selected = true;
  selectTag.add(defaultOption);

  // Add options for each unique category
  options.forEach((option) => {
    // const categoryValue = option.toLowerCase().replace("/\s/g", "")"
    const categoryValue = option;//.toLowerCase().split(" ").join("");
    const optionTag = document.createElement("option");
    optionTag.value = categoryValue;
    optionTag.text = option;
    selectTag.add(optionTag);
  });
}

export default selectComponent;
