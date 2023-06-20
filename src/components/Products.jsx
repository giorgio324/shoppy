import Product from './Product';

const Products = () => {
  return (
    <section className='py-10'>
      <div className='flex flex-col items-center gap-4 px-16'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          shopping everyday
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex
          quam voluptates adipisci, autem dolorem esse cupiditate itaque dolore
          quibusdam. Quibusdam quis esse doloremque exercitationem accusamus,
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto px-16'>
        <Product />
      </div>
    </section>
  );
};
export default Products;