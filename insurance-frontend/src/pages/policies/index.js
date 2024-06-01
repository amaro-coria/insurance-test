import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '../../utils/api';

export default function Policies() {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPolicies() {
      try {
        const response = await api.get('/policies');
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setPolicies(response.data);
        } else {
          setPolicies([]);
          console.error('Unexpected response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching policies:', error);
        setError('Failed to fetch policies. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPolicies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Insurance Policies</h1>
      <Link href="/policies/create">
        <a>Create New Policy</a>
      </Link>
      <ul>
        {policies.map(policy => (
          <li key={policy.id}>
            {policy.policyNumber} - {policy.holderName}{' '}
            <Link href={`/policies/${policy.id}/edit`}>
              <a>Edit</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
