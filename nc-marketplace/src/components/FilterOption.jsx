const FilterOption = ({category}) => {
    const {category_name} = category
    return (
        <option value={category_name}>
            {category_name}
        </option>
    )
}

export default FilterOption