import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../api";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { CastList } from "../CastList/CastList";

export const CastSubpage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchedData() {
      try {
        setLoad(true);
        setError(false);
        const fetchedCast = await getCast(movieId, {
          abortController: controller,
        });

        setCast(fetchedCast.cast);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoad(false);
      }
    }
    fetchedData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {load && <Loader />}
      {error && <ErrorMessage />}
      {cast && <CastList cast={cast} />}
    </div>
  );
};
