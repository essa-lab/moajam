export class PaginateModels<T> {
  current_page!: number
  data!: T
  first_page_url!: string 
  from!: number
  last_page!: number
  last_page_url!: string
  next_page_url!: string
  path!: string
  per_page!: number
  prev_page_url!: null
  to!: number
  total!: number
  }
  
  export class ResponseModal<T>{
  status!: number
  data!: T
  message!: string
  }
  