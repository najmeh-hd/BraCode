export type CardProps = {
  id: string;
  imageSrc: string;    
  title: string;           
  subtitle: string;  
  descriptions: string;    
  teacher: string;        
  rating: number;         
  price?: number;      
  isFree: Boolean;  
  studentsCount?: number; 
};