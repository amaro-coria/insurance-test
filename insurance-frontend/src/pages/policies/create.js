import { useRouter } from 'next/router';
import PolicyForm from '../../components/PolicyForm';

export default function CreatePolicy() {
  const router = useRouter();

  const handleFormSubmit = () => {
    router.push('/policies');
  };

  return (
    <div>
      <h1>Create New Policy</h1>
      <PolicyForm onSubmit={handleFormSubmit} />
    </div>
  );
}
