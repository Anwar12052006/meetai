import {Button} from "@/components/ui/button";

interface Props {
    page: number;
    totalPages: number;
    onPageChanges: (page: number) => void;
}

export const DataPagination = ({
   page,
   totalPages,
   onPageChanges, 
}: Props) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex-1 text-sm text-muted-foreground">
            page {page} of {totalPages || 1}
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                disabled={page === 1}
                variant="outline"
                size="sm"
                onClick={() => onPageChanges(Math.max(1, page-1))}
                >
                    Previous
                </Button>
                <Button
                disabled={page === totalPages || totalPages === 0}
                variant="outline"
                size="sm"
                onClick={() => onPageChanges(Math.min(totalPages, page+1))}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};