import { useLoaderData } from 'react-router-dom';
import { MdOutlineStar, MdStarBorder } from 'react-icons/md';
const Product = () => {
  const fetchedProduct = useLoaderData();
  console.log(fetchedProduct);
  const maxRating = 5;
  const rating = Math.round(fetchedProduct?.rating?.rate || 0);
  const emptyStars = Math.max(0, maxRating - rating);
  return (
    <>
      <section className='max-w-screen-xl mx-auto px-12 py-20 flex gap-10'>
        <img
          src={fetchedProduct?.image}
          alt={fetchedProduct?.title}
          className='h-[500px] object-cover'
        />
        <div className='flex-grow py-12'>
          <h1 className='text-3xl font-bold'>{fetchedProduct?.title}</h1>
          <p className='text-gray-500 text-sm my-4'>
            Category: {fetchedProduct?.category.toUpperCase()}
          </p>
          <p className='text-2xl font-semibold my-4'>
            Price: ${fetchedProduct?.price}
          </p>
          <div className='flex gap-1 my-4 items-center'>
            {[...Array(rating)].map((_, index) => (
              <MdOutlineStar key={index} className='text-xl' />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <MdStarBorder key={index} className='text-xl' />
            ))}
            <p className='text-base text-gray-500'>
              ({fetchedProduct?.rating?.count || 0} Customer Reviews)
            </p>
          </div>
          <p className='text-base text-gray-500 my-4'>
            {fetchedProduct?.description}
          </p>

          <div className='flex flex-col lg:flex-row gap-4 py-4'>
            <div
              className='border flex gap-8 text-gray-500 p-4 justify-center
            items-center'
            >
              <p>Amount</p>
              <div className='flex gap-4'>
                <button className='group relative border px-3'>
                  <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
                  <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                    -
                  </span>
                </button>
                <p className='font-semibold'>1</p>
                <button className='group relative border px-3'>
                  <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
                  <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                    +
                  </span>
                </button>
              </div>
            </div>
            <button className='group relative border px-6 py-4'>
              <span className='absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full'></span>
              <span className='relative z-10 text-black transition-colors duration-500 ease-in-out group-hover:text-white'>
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
