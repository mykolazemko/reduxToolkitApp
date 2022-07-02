import style from "./Pagination.module.scss";

export const Pagination = ({ paginationCount, prevAndNextPage,	currentPage,	setPreVAndNextLink, setCurrentPage }: any) => {
  return (
    <div className={style.pagination}>
      {prevAndNextPage.prevPage === null ? (
        <span className={style.disabled}>prev</span>
      ) : (
        <span className={style.active} onClick={() => setPreVAndNextLink(prevAndNextPage.prevPage)}>
          prev
        </span>
      )}

      {paginationCount.map((p: number) =>
        p === currentPage ? (
          <span className={`${style.disabled} ${style.paginationItem}`}>{p}</span>
        ) : (
          <span className={`${style.active} ${style.paginationItem}`} key={p} onClick={() => setCurrentPage(p)}>
            {p}
          </span>
        )
      )}

      {prevAndNextPage.nextPage === null ? (
        <span className={style.disabled}>next</span>
      ) : (
        <span className={style.active} onClick={() => setPreVAndNextLink(prevAndNextPage.nextPage)}>
          next
        </span>
      )}
    </div>
  );
};
