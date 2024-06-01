import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../../utils/api';
import PolicyForm from '../../../components/PolicyForm';

export default function EditPolicy() {
  const router = useRouter();
  const { id } = router.query;
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function fetchPolicy() {
      try {
        const response = await api.get(`/policies/${id}`);
        setPolicy(response.data);
      } catch (error) {
        console.error('Error fetching policy:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPolicy();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit Policy</h1>
      <PolicyForm policy={policy} onSubmit={() => router.push('/policies')} />
    </div>
  );
}
