import { Skeleton } from '@mui/material'

const ItemSkeleton = () => {
   return (
      <div className="countries__item" >
         <Skeleton
            variant="rectangular"
            height={140}
            sx={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
         />

         <div className="countries__info">
            <Skeleton height={32} sx={{ mb: 2 }} />
            <div>
               <Skeleton variant="text" width={140} />
               <Skeleton variant="text" width={100} />
               <Skeleton variant="text" width={120} />
            </div>
         </div>
      </div>
   )
}

export default ItemSkeleton