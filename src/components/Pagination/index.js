import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changePage } from "../../redux/actions/pagination";
import "./style.css";
const maxPagesNum = 6;

const pagesCount = (start, curr, handleClick, total) => {
  const pages = [];
  const totalPages = (total + 9) / 10;
  let num = maxPagesNum + start;
  if (num > totalPages) num = totalPages;

  for (let i = start; i < num; ++i) {
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
    if (maxPagesNum + start >= pagination.total / 10) return;
    setStart(prev => prev + 1);
  };
  if (pagination.total < 11) return null;
  return (
    <div class="pagination">
      <div onClick={handlePrev}>&laquo;</div>
      {pagesCount(start, pagination.currPage, handleChangePage, pagination.total)}
      <div onClick={handleNext}>&raquo;</div>
    </div>
  );
};

export default Pagination;
