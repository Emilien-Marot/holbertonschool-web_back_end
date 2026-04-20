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
