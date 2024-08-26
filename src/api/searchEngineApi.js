export async function fetchTables() {
  try {
    const response = await fetch(
      "http://localhost:3001/api/search_engine/tables"
    );
    if (!response.ok) {
      throw new Error(`Error fetching tables: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.message);
    }
    return data.tables;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function fetchColumns(tableName) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/search_engine/columns/${tableName}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching columns: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.message);
    }
    return data.columns;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export async function fetchDistinctValues(tableName, columnName) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/search_engine/${tableName}/${columnName}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching distinct values: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data.ok) {
      throw new Error(data.message);
    }
    return data.result;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export const fetchEngines = async (
  page,
  limit,
  search,
  setLoading,
  setError,
  setEngines,
  setPagination
) => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch(
      `http://localhost:3001/api/search_engine/engines?page=${page}&limit=${limit}&search=${encodeURIComponent(
        search
      )}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setEngines(data.data);
    setPagination(data.pagination);
  } catch (err) {
    setError("Failed to fetch engines");
  } finally {
    setLoading(false);
  }
};
