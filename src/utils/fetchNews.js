import axios from "axios";
import { setLoading, setNextPage } from "../redux/UserSlicer/userSlice";

export const fetchNews = async (dispatch, category, page = 0) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get(
      `https://newsdata.io/api/1/latest?apikey=${process.env.REACT_APP_API_KEY}&category=${category}&language=en` +
        (page ? `&page=${page}` : "")
    );
    dispatch(setNextPage(data.nextPage));
    return data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
