import React, { Dispatch, SetStateAction, useState } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa'; // Importing Plus and Edit icons

// Define the Specification interface
interface Specification {
  sKey: string;
  sValue: string;
}

// Define the props interface for the component
interface SpecificationTextAreaProps {
  specification: Specification[];
  setSpecification: Dispatch<SetStateAction<Specification[]>>;
}

// SpecificationTextArea component
export default function SpecificationTextArea({
  specification,
  setSpecification,
}: SpecificationTextAreaProps) {
  
  // Local state for sKey and sValue inputs
  const [sKey, setSKey] = useState<string>('');
  const [sValue, setSValue] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null); // Track which item is being edited

  // Handle adding or updating a specification
  const handleAddOrUpdateSpecification = () => {
    if (sKey.trim() === '' || sValue.trim() === '') {
      alert("Both sKey and sValue are required.");
      return;
    }

    if (editIndex !== null) {
      // Update the existing specification
      const updatedSpecification = [...specification];
      updatedSpecification[editIndex] = { sKey, sValue };
      setSpecification(updatedSpecification);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add a new specification
      setSpecification([...specification, { sKey, sValue }]);
    }

    // Reset input fields
    setSKey('');
    setSValue('');
  };

  // Handle editing a specific specification
  const handleEditSpecification = (index: number) => {
    setSKey(specification[index].sKey);
    setSValue(specification[index].sValue);
    setEditIndex(index); // Set the index of the item being edited
  };

  return (
    <div >
      <h3 style={{ fontSize: '1rem' }}>Specification</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
        <div>
          <input
            type="text"
            id="sKey"
            value={sKey}
            onChange={(e) => setSKey(e.target.value)}
            placeholder="Enter specification key"
            style={{ width: '100%', padding: '8px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div>
          <input
            type="text"
            id="sValue"
            value={sValue}
            onChange={(e) => setSValue(e.target.value)}
            placeholder="Enter specification value"
            style={{ width: '100%', padding: '8px', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      <div
        onClick={handleAddOrUpdateSpecification}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          backgroundColor: '#007bffca',
          padding: '8px 12px',
          borderRadius: '5px',
          color: 'white',
          fontSize: '1rem',
        }}
      >
        Add/Edit Specifications
      </div>

      <h4 style={{ fontSize: '1rem', marginTop: '20px' }}>Current Specifications</h4>
      <ul style={{ paddingLeft: '20px', listStyleType: 'circle' }}>
        {specification.map((spec, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <strong>{spec.sKey}:</strong> {spec.sValue} 
            <FaEdit
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                color: '#007bff',
              }}
              onClick={() => handleEditSpecification(index)} // Edit functionality
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
