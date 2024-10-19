import { useState } from "react";

type Task = {
  title: string;
  description: string;
  priority: string;
  completed: boolean;
};

type SearchBarProps = {
  data: Task[]; 
  onSearch: (results: Task[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>(""); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    const results = data.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        className="text-black"
        onChange={handleInputChange}
        placeholder="Search..."
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "4px",
          marginLeft:'auto',
          marginRight:'auto',
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};


export default SearchBar;
