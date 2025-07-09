import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <TextField
      id="search"
      variant="standard"
      label="Find contacts"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
