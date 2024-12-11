export interface TableColumnModel {
  field: string; // کلید داده‌ای ستون
  header: string; // عنوان نمایشی ستون
  type: 'text' | 'status' | 'badgeStatus' | 'number' | 'date' | any; // نوع داده ستون
}
