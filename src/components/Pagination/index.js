import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changePage } from "../../redux/actions/pagination";
import "./style.css";
const maxPagesNum = 6;

const pagesCount = (start, curr, handleClick) => {
  const pages = [];
  for (let i = start; i < maxPagesNum + start; ++i) {
    pages.push(
      <div onClick={() => handleClick(i)} key={i} className={curr === i ? "active" : ""}>
        {i}
      </div>
    );
  }
  return pages;
};
const Pagination = () => {
  const [start, setStart] = useState(1);
  const pagination = useSelector(({ pagination }) => pagination);
  const dispatch = useDispatch();

  const handleChangePage = page => {
    dispatch(changePage(page));
  };
  const handlePrev = () => {
    if (start === 1) return;
    setStart(prev => prev - 1);
  };
  const handleNext = () => {
    setStart(prev => prev + 1);
  };
  return (
    <div class="pagination">
      <div onClick={handlePrev}>&laquo;</div>
      {pagesCount(start, pagination.currPage, handleChangePage)}
      <div onClick={handleNext}>&raquo;</div>
    </div>
  );
};

export default Pagination;
