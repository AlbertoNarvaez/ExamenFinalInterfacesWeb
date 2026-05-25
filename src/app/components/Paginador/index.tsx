"use client";
import "./styles.css";

type PaginadorProps = {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
};

const Paginador = ({ page, totalPages, setPage }: PaginadorProps) => {
  if (totalPages <= 1) return null;

  const pagesSet = new Set<number>();
  [1, 2, 3].forEach((p) => { if (p <= totalPages) pagesSet.add(p); });
  
  pagesSet.add(page);
  [totalPages - 2, totalPages - 1, totalPages].forEach((p) => { if (p >= 1) pagesSet.add(p); });

  const pages = Array.from(pagesSet).sort((a, b) => a - b);

  return (
    <div className="PaginadorContainer">
      {page > 1 && (
        <div className="arrowContainer" onClick={() => setPage(page - 1)}>
          <p>{"<"}</p>
        </div>
      )}
      {pages.map((p) => (
        <div
          key={p}
          className={`pageNumber ${p === page ? "active" : ""}`}
          onClick={() => setPage(p)}
        >
          <p>{p}</p>
        </div>
      ))}
      {page < totalPages && (
        <div className="arrowContainer" onClick={() => setPage(page + 1)}>
          <p>{">"}</p>
        </div>
      )}
    </div>
  );
};

export default Paginador;
