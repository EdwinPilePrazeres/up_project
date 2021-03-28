import React from "react";
import MaterialTable from "material-table";

const Table = () => {
  return (
    <div style={{ maxWidth: "100%", position: "relative", paddingTop: "80px" }}>
      <MaterialTable
        classname="options.headerStyle"
        columns={[
          {
            title: "Title",
            field: "title",
            headerStyle: {
              backgroundColor: "#418f7f",
              color: "#FFF",
            },
          },
          {
            title: "Autors",
            field: "autors",
            headerStyle: {
              backgroundColor: "#418f7f",
              color: "#FFF",
            },
          },
          {
            title: "Link",
            field: "link",
            headerStyle: {
              backgroundColor: "#418f7f",
              color: "#FFF",
            },
          },
        ]}
        data={[
          {
            title: "Visor Redalyc",
            autors: "Edwin Pile, Andrés Chang",
            link: (
              <a target='_blank' rel="noreferrer" href="http://portal.amelica.org/ameli/jatsRepo/212/2121146004/movil/index.html">
                Click Here
              </a>
            ),
          },
          {
            title:
              "Caracterización de las Explotaciones Ganaderas de Leche en Agroecosistemas de la Provincia de Darien, Panama",
            autors: "Edwin Pile, Andres Chang",
            link: (
              <a target='_blank' rel="noreferrer" href="https://revistas.up.ac.pa/index.php/centros/article/view/287">
                Click Here
              </a>
            ),
          },
        ]}
        title="Ultimas Investigaciones"
      />
    </div>
  );
};

export default Table;
