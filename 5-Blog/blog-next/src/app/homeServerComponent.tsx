import { createClient } from '@/prismicio';
import HomeComponents from './homeComponents'
export const queryHomePage = async () => {
  const client = createClient();
  const page = await client.getSingle("home");
  return page;
}

const HomeServerComponent = async () => {
  const page = await queryHomePage();
  return (
    <div>
      <HomeComponents page={page} />
    </div>
  );
}

export default HomeServerComponent;
