import { useState, useEffect } from 'react';
import api from '../utils/api';

export default function PolicyForm({ policy, onSubmit }) {
  const [formData, setFormData] = useState({
    policyNumber: '',
    holderName: '',
    startDate: '',
    endDate: '',
    premium: '',
  });

  useEffect(() => {
    if (policy) {
      setFormData({
        policyNumber: policy.policyNumber,
        holderName: policy.holderName,
        startDate: formatDate(policy.startDate),
        endDate: formatDate(policy.endDate),
        premium: policy.premium,
      });
    }
  }, [policy]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (policy) {
        await api.put(`/policies/${policy.id}`, formData);
      } else {
        await api.post('/policies', formData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Policy Number:</label>
        <input
          type="text"
          name="policyNumber"
          value={formData.policyNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Holder Name:</label>
        <input
          type="text"
          name="holderName"
          value={formData.holderName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Premium:</label>
        <input
          type="number"
          name="premium"
          value={formData.premium}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{policy ? 'Update' : 'Create'}</button>
    </form>
  );
}
