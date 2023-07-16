import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

export default async function Home() {
  await db.set('hi', 'hi');
  return (
    <Button size='lg' variant='default'>
      Hallo
    </Button>
  );
}
