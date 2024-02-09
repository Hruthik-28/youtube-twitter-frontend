import React, { useState } from "react";
import { timeAgo } from "../helpers/timeAgo";
import { useSelector, useDispatch } from "react-redux";
import { Like, DeleteConfirmation, Edit } from "./index";
import { HiOutlineDotsVertical } from "./icons";
import { deleteAComment, editAComment } from "../store/Slices/commentSlice";

function CommentsList({
    avatar,
    username,
    createdAt,
    content,
    commentId,
    isLiked,
    likesCount,
}) {
    const avatar2 = useSelector((state) => state.auth?.userData?.avatar.url);
    const authUsername = useSelector((state) => state.auth?.userData?.username);
    const dispatch = useDispatch();

    const [editState, setEditState] = useState({
        editing: false,
        editedContent: content,
        isOpen: false,
        delete: false,
    });

    const handleEditComment = (editedContent) => {
        console.log(editedContent);
        dispatch(editAComment({ commentId, content: editedContent }));
        setEditState((prevState) => ({
            ...prevState,
            editing: false,
            editedContent,
            isOpen: false,
            delete: false,
        }));
    };

    const handleDeleteComment = () => {
        dispatch(deleteAComment(commentId));
        setEditState((prevState) => ({
            ...prevState,
            delete: false,
        }));
    };

    return (
        <>
            <div className="text-white w-full flex justify-start items-center sm:gap-5 gap-3 border-b border-slate-600 p-3 sm:p-5">
                <div className="w-12">
                    <img
                        src={avatar || avatar2}
                        className="w-10 h-10 object-cover rounded-full"
                    />
                </div>
                <div className="w-full flex flex-col gap-1 relative">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xs">{username}</h2>
                        <span className="text-xs text-slate-400">
                            {timeAgo(createdAt)}
                        </span>
                    </div>

                    {/*dropdown for edit and delete comment */}
                    {authUsername === username && (
                        <div className="absolute right-0">
                            <div className="relative">
                                <HiOutlineDotsVertical
                                    className="text-white cursor-pointer"
                                    onClick={() =>
                                        setEditState((prevState) => ({
                                            ...prevState,
                                            isOpen: !prevState.isOpen,
                                        }))
                                    }
                                />

                                {editState.isOpen && (
                                    <div className="border bg-[#222222] text-lg border-slate-600 absolute text-center right-2 rounded-xl">
                                        <ul>
                                            <li
                                                className="hover:opacity-50 px-5 cursor-pointer border-b border-slate-600"
                                                onClick={() =>
                                                    setEditState(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            editing:
                                                                !prevState.editing,
                                                            isOpen: false,
                                                        })
                                                    )
                                                }
                                            >
                                                Edit
                                            </li>
                                            <li
                                                className="px-5 hover:opacity-50 cursor-pointer"
                                                onClick={() =>
                                                    setEditState(
                                                        (prevState) => ({
                                                            ...prevState,
                                                            delete: true,
                                                            isOpen: false,
                                                        })
                                                    )
                                                }
                                            >
                                                Delete
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Delete Confirm popup */}
                    {editState.delete && (
                        <DeleteConfirmation
                            onCancel={() =>
                                setEditState((prevState) => ({
                                    ...prevState,
                                    delete: false,
                                    isOpen: false,
                                }))
                            }
                            onDelete={handleDeleteComment}
                            comment={true}
                        />
                    )}

                    {/* edit comment */}
                    {editState.editing ? (
                        <Edit
                            initialContent={editState.editedContent}
                            onCancel={() =>
                                setEditState((prevState) => ({
                                    ...prevState,
                                    editing: false,
                                    isOpen: false,
                                }))
                            }
                            onSave={handleEditComment}
                        />
                    ) : (
                        editState.editedContent
                    )}

                    {/* Like for comments */}
                    <Like
                        isLiked={isLiked}
                        likesCount={likesCount}
                        commentId={commentId}
                        size={17}
                    />
                </div>
            </div>
        </>
    );
}

export default CommentsList;
