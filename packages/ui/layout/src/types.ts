export interface FillProps {
  fill?: boolean
}

export interface LayoutProps {
  align?: string
  justify?: string
  basis?: string | number
  grow?: number
  shrink?: number
}

export interface RowProps extends LayoutProps, FillProps {
  wrap?: string
}
export interface ColumnProps extends LayoutProps, FillProps {
  wrap?: string
}
