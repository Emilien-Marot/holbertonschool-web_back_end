#!/usr/bin/env python3
"""
back at school
"""
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        here you go
        :param page:
        :param page_size:
        :return:
        """
        assert (isinstance(page, int) and
                isinstance(page_size, int) and
                page > 0 and page_size > 0)
        dataset = self.dataset()
        range_pg = index_range(page, page_size)
        return dataset[range_pg[0]:range_pg[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        here you go
        :param page:
        :param page_size:
        :return:
        """
        assert (isinstance(page, int) and
                isinstance(page_size, int) and
                page > 0 and page_size > 0)
        dataset = self.dataset()
        length = len(dataset)
        range_pg = index_range(page, page_size)
        data = dataset[range_pg[0]:range_pg[1]]
        total_pages = math.ceil(length / page_size)
        next_page = page + 1
        if next_page > total_pages:
            next_page = None
        prev_page = page - 1
        if prev_page <= 0:
            prev_page = None
        return {"page_size": page_size,
                "page": page,
                "data": data,
                "next_page": next_page,
                "prev_page": prev_page,
                "total_pages": total_pages}


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """
    voila
    :param page:
    :param page_size:
    :return:
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end
